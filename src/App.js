import { createForm, onFormValuesChange } from "@formily/core";
import { FormProvider, FormConsumer, Field } from "@formily/react";
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from "@formily/antd";

const form = createForm({
  effects:()=>{
    // npm start 打开浏览器后。。输入值都是正常的。
    /**
     * 但是 在浏览器里刷新后就不行了，导致以下问题
     * 如果initialValue传了值，导致无法正常输入
     * 如果initialValue没有传值，input可以正常输入，但是没有触发onFormValuesChange方法
     *  */
    onFormValuesChange(console.log);
  }
});


const App =() => {
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="input"
          title="输入框"
          required
          initialValue="Hello world"
          decorator={[FormItem]}
          component={[Input]}
        />
      </FormLayout>
      <FormConsumer>
        {() => (
          <div
            style={{
              marginBottom: 20,
              padding: 5,
              border: "1px dashed #666",
            }}
          >
            实时响应：{form.values.input}
          </div>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default App