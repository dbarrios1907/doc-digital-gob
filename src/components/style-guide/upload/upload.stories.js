// export default {
//   title: 'Style Guide/Upload',
//   argTypes: {
//     color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
//     files: null,
//     plain: { control: { type: 'boolean', default: false} },
//     disabled: { control: { type: 'boolean', default: false} },
//     multiple: { control: { type: 'boolean', default: true} },
//     directory: { control: { type: 'boolean', default: false} },
//     manualUpload: { control: { type: 'boolean', default: false} },
//     removeEnabled: { control: { type: 'boolean', default: true} },
//     limit: { control: { type: 'number', default: 10000} },
//     accept: { control: { type: 'text', default: '*'} },
//   },
// };
//
// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   template: `
//       <div class="">
//         <b-upload class="mt-3" multiple
//           v-bind="$props"
//         ></b-upload>
//       </div>
//     `,
//
// });
//
// export const Default = Template.bind({});
// Default.args = {};
