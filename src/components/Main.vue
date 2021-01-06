<template>
  <el-container>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        Header
      </el-header>
    </el-container>

    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-menu-item index="1">
            <router-link to="/view/main/home" class="router-link-none">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/view/main/icon" class="router-link-none">图标</router-link>
          </el-menu-item>
          <el-menu-item index="3">标签</el-menu-item>
          <el-submenu index="4">
            <template #title>实例与镜像</template>
            <el-menu-item-group>
              <el-menu-item index="4-1">实例</el-menu-item>
              <el-menu-item index="4-2">弹性容器实例ECI</el-menu-item>
              <el-menu-item index="4-3">专有宿主机</el-menu-item>
              <el-menu-item index="4-4">超级计算集群</el-menu-item>
              <el-menu-item index="4-5">预留实例劵</el-menu-item>
              <el-menu-item index="4-6">节省计划</el-menu-item>
              <el-menu-item index="4-7">镜像</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template #title>部署与弹性</template>
            <el-menu-item-group>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template #title>存储与快照</template>
            <el-menu-item-group>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template #title>网络与安全</template>
            <el-menu-item-group>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template #title>运维与监控</template>
            <el-menu-item-group>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="9">
            <template #title>会员管理</template>
            <el-menu-item-group>
              <el-menu-item index="9-1">
                <router-link to="#" class="router-link-none">会员列表</router-link>
              </el-menu-item>
              <el-menu-item index="9-2">
                <router-link to="#" class="router-link-none">会员等级</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped>
  .router-link-none {
    text-decoration: none;
  }
</style>
