<style lang="scss">
@include b(list-toolbar) {
  .v-input--selection-controls {
    margin-top: 0;
  }
}
</style>

<template>
  <div class="app-list-toolbar" flex="main:justify cross:center">
    <div>
      <v-checkbox
        v-if="isSelectActive"
        :value="isSelectedAll"
        label="全选"
        :ripple="false"
        @click="onClickSelectAll"
        readonly
        hide-details/>
    </div>
    <div v-if="isSelectActive && selectedCount">
      <v-btn
        color="primary"
        outlined
        depressed
        @click="onClickSelected">
        {{selectedCount}} 个项目
      </v-btn>
    </div>
    <div>
      <v-btn
        color="primary"
        :outlined="!isSelectActive"
        depressed
        @click="onClickActive">
        {{ isSelectActive ? '取消选择' : '多选'}}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-list-toolbar',
  props: {
    isSelectedAll: {
      type: Boolean
    },
    isSelectActive: {
      type: Boolean
    },
    selectedCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onClickActive () {
      this.$emit('select-active-change', !this.isSelectActive)
    },
    onClickSelected () {
      this.$emit('click-selected')
    },
    onClickSelectAll (e) {
      this.$emit('select-all-change', !this.isSelectedAll)
      return e
    }
  }
}
</script>
