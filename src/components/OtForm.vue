<template>
  <section>
    <el-form class="ot__form">
      <el-form-item v-for="item in itemList" :label="item.display" :key="item.selector">
        <el-input v-model="item.value" :type="item.type" :placeholder="item.display" />
      </el-form-item>
      <el-form-item v-for="button in buttonList" :key="button.selector">
        <el-button :type="button.type" @click="handleAction(button)">{{button.display}}</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({})
export default class OtForm extends Vue {
  @Prop({ required: true }) readonly itemList: unknown;
  @Prop({ required: true }) readonly buttonList: any[] = [];

  handleAction(button: any): void {
    this.$emit(button.action, this.itemList)
  }
}

</script>