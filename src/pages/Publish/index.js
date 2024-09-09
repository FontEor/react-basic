import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";
import "./index.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useRef } from "react";
import { createArticleAPI } from "@/apis/article";
import { useChanel } from "@/hooks/useChannel";
import { useEffect } from "react";
import { getArticleByIdAPI, EditArticleByIdAPI } from "@/apis/article";
const { Option } = Select;
const Publish = () => {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  const [form] = Form.useForm();
  const { channelList } = useChanel();
  const onFinish = async (formData) => {
    if (imageType !== imageList.length) {
      return message.warning("图片类型和数量不一致");
    }
    const formatUrl = (list) => {
      return list.map((item) => {
        if (item.response) {
          return item.response.data.url;
        } else {
          return item.url;
        }
      });
    };
    const { channel_id, content, title } = formData;
    const params = {
      channel_id,
      content,
      title,
      type: imageType,
      cover: {
        type: imageType,
        images: formatUrl(imageList),
      },
    };
    if (articleId) {
      // 编辑
      await EditArticleByIdAPI(articleId, params);
    } else {
      // 新增
      await createArticleAPI(params);
    }
    message.success(`${articleId ? "编辑" : "发布"}文章成功`);
  };
  useEffect(() => {
    async function getArticleDetail() {
      const res = await getArticleByIdAPI(articleId);
      const { cover, ...formValue } = res.data;
      // 1. 回填表单数据
      form.setFieldsValue({ ...formValue, type: cover.type });
      // 2. 回填封面图片
      setImageType(cover.type); // 封面类型
      setImageList(cover.images.map((url) => ({ url }))); // 封面list
    }
    if (articleId) {
      // 拉取数据回显
      getArticleDetail();
    }
  }, [articleId, form]);
  const cacheImageList = useRef([]);
  const [imageList, setImageList] = useState([]);
  const onUploadChange = (info) => {
    setImageList(info.fileList);
    cacheImageList.current = info.fileList;
  };
  // 控制图片Type
  const [imageType, setImageType] = useState(1);
  const onTypeChange = (e) => {
    setImageType(e.target.value);
    const type = e.target.value;
    if (type === 1) {
      // 单图，截取第一张展示
      const imgList = cacheImageList.current[0]
        ? [cacheImageList.current[0]]
        : [];
      setImageList(imgList);
    } else if (type === 3) {
      // 三图，取所有图片展示
      setImageList(cacheImageList.current);
    }
  };
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>首页</Link> },
              { title: `${articleId ? "编辑文章" : "发布文章"}` },
            ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imageType > 0 && (
              <Upload
                listType="picture-card"
                showUploadList
                action={"http://geek.itheima.net/v1_0/upload"}
                onChange={onUploadChange}
                name="image"
                maxCount={imageType}
                multiple={imageType > 1}
                fileList={imageList}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
