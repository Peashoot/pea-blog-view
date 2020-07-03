<template>
    <p>
        <label for="gender">{{$t('label.gender')}}</label>
        <input type="radio" name="gender" value="0" id="rdo_gender_secret" ref="rdo_gender_secret" checked>
        <label for="rdo_gender_secret">{{$t('label.gender_secret')}}</label>
        <input type="radio" name="gender" value="1" id="rdo_gender_man" ref="rdo_gender_man">
        <label for="rdo_gender_man">{{$t('label.gender_man')}}</label>
        <input type="radio" name="gender" value="2" id="rdo_gender_woman" ref="rdo_gender_woman">
        <label for="rdo_gender_woman">{{$t('label.gender_woman')}}</label>
    </p>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch, Ref } from "vue-property-decorator";
@Component
export default class extends Vue {
    /**
     * 性别值 0 保密 1 男 2 女
     */
    @Prop()
    value!: string
    /**
     * 将当前组件的值传到上一层
     */
    handleInput(event: any) {
        let value = event.target.value;
        this.$emit('input', value);
    }
    @Ref('rdo_gender_man')
    readonly rdoGenderMan!: HTMLInputElement

    @Ref('rdo_gender_woman')
    readonly rdoGenderWoman!: HTMLInputElement

    @Ref('rdo_gender_secret')
    readonly rdoGenderSecret!: HTMLInputElement

    @Watch('value')
    onValueChanged(newVal: string, oldVal: string) {
        switch (newVal) {
            case "1":
                this.rdoGenderMan.checked = true;
                break;
            case "2":
                this.rdoGenderWoman.checked = true;
                break;
            default:
                this.rdoGenderSecret.checked = true;
                break;
        }
    }
}
</script>