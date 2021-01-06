import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Card, Button, Form, Input } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import { deleteFeature, getFeatures } from "../../actions/features";

const FeatureDetailContainer = ({ armId, editable }) => {
  const features = useSelector((state) => state.features);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getFeatures({
        arm_id: armId,
      }),
    );
  }, [dispatch, armId]);

  const handleDeleteFeature = (item) => {
    dispatch(
      deleteFeature({
        id: item.id,
      }),
    );
  };

  if (features.loading) return <div>loading...</div>;
  return (
    <>
      <List
        locale={{ emptyText: <div>{!editable ? "No data" : ""}</div> }}
        header="Features"
        grid={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        dataSource={features.data?.[armId] || []}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
              title={item.key}
              type="inner"
              extra={[
                editable ? (
                  <Button
                    type="text"
                    key="feature_delete"
                    onClick={() => {
                      handleDeleteFeature(item);
                    }}
                  >
                    <CloseOutlined />
                  </Button>
                ) : (
                  ""
                ),
              ]}
            >
              {item.value}
            </Card>
          </List.Item>
        )}
      />
      {editable ? (
        <Form.List name="features">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Card
                  type="inner"
                  key={`feature_card_${index}`}
                  title={`New feature ${index + 1}`}
                  actions={[
                    <DeleteOutlined onClick={() => remove(field.name)} />,
                  ]}
                  style={{ marginBottom: "14px" }}
                >
                  <Form.Item
                    {...field}
                    key={`${field.name}_key_${index}`}
                    name={[field.name, "key"]}
                    fieldKey={[field.fieldKey, "key"]}
                    rules={[{ required: true, message: "key is required!" }]}
                  >
                    <Input placeholder="key" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    key={`${field.name}_value_${index}`}
                    name={[field.name, "value"]}
                    fieldKey={[field.fieldKey, "value"]}
                    rules={[{ required: true, message: "value is required!" }]}
                  >
                    <Input.TextArea placeholder="value" />
                  </Form.Item>
                </Card>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  icon={<PlusOutlined />}
                  block
                  onClick={() => add()}
                >
                  Add new Feature
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      ) : (
        ""
      )}
    </>
  );
};

export default FeatureDetailContainer;
