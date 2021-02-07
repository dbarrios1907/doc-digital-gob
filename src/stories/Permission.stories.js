import permission from '@/shared/directives/permission'
import checkPermission from '@/shared/utils/auth/permission'

export default {
  title: 'Samples/Permissions',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  name: 'DirectivePermission',
  directives: { permission },
  data() {
    return {
      key: 1,
    }
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++
    },
  },
  template: `
    <div class="app-container">
      <switch-roles @change="handleRolesChange" />
      <div :key="key" style="margin-top:30px;">
        <div>
      <span v-permission="['admin']" class="permission-alert">
        Only
        <el-tag class="permission-tag" size="small">admin</el-tag> can see this
      </span>
          <el-tag v-permission="['admin']" class="permission-sourceCode" type="info">
            v-permission="['admin']"
          </el-tag>
        </div>

        <div>
      <span v-permission="['editor']" class="permission-alert">
        Only
        <el-tag class="permission-tag" size="small">editor</el-tag> can see this
      </span>
          <el-tag v-permission="['editor']" class="permission-sourceCode" type="info">
            v-permission="['editor']"
          </el-tag>
        </div>

        <div>
      <span v-permission="['admin','editor']" class="permission-alert">
        Both
        <el-tag class="permission-tag" size="small">admin</el-tag> and
        <el-tag class="permission-tag" size="small">editor</el-tag> can see this
      </span>
          <el-tag v-permission="['admin','editor']" class="permission-sourceCode" type="info">
            v-permission="['admin','editor']"
          </el-tag>
        </div>
      </div>

      <div :key="'checkPermission'+key" style="margin-top:60px;">
        <aside>
          In some cases, using v-permission will have no effect. 
          For example: Element-UI's Tab component or el-table-column and other scenes that dynamically render dom. 
          You can only do this with v-if.
          <br> e.g.
        </aside>

        <el-tabs type="border-card" style="width:550px;">
          <el-tab-pane v-if="checkPermission(['admin'])" label="Admin">
            Admin can see this
            <el-tag class="permission-sourceCode" type="info">
              v-if="checkPermission(['admin'])"
            </el-tag>
          </el-tab-pane>

          <el-tab-pane v-if="checkPermission(['editor'])" label="Editor">
            Editor can see this
            <el-tag class="permission-sourceCode" type="info">
              v-if="checkPermission(['editor'])"
            </el-tag>
          </el-tab-pane>

          <el-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-OR-Editor">
            Both admin or editor can see this
            <el-tag class="permission-sourceCode" type="info">
              v-if="checkPermission(['admin','editor'])"
            </el-tag>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}
