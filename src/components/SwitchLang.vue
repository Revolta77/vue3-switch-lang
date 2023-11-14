<template>
		<VueMultiselect
						ref="switchLang"
						v-model="selected"
						class="select-lang-container"
						:options="options"
						:multiple="false"
						:searchable="false"
						:show-labels="false"
						:allow-empty="false"
						track-by="title"
						@select="onSelect"
						@close="onClose"
		>
				<div v-if="props && props.option" slot="singleLabel" slot-scope="props">
						<country-flag :country="props.option.flag"/>
				</div>
				<div v-if="props && props.option" slot="option" slot-scope="props">
						<country-flag :country="props.option.flag"/>
				</div>
		</VueMultiselect>
</template>
<script>
    import VueMultiselect from 'vue-multiselect'
    import CountryFlag from 'vue-country-flag-next'
    import $ from "jquery"

    export default {
        components: {
            VueMultiselect,
            CountryFlag
        },
        props: {
            initLang: {
                type: Object,
                default() {
                    return {
                        title: "en",
                        flag: "gb"
                    };
                }
            },
            options: {
                type: Array,
                default() {
                    return [
                        {
                            title: "en",
                            flag: "gb"
                        }
                    ];
                }
            }
        },
        created() {
            this.selected = this.initLang;
        },
        methods: {
            onSelect(lang) {
                this.$emit("changed", lang);
            },
            onClose() {
                $(this.$refs.switchLang).find('.multiselect__option--highlight').removeClass('multiselect__option--highlight')
            }
        },
        data() {
            return {
                selected: null
            };
        }
    };
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
		.multi-select-language {
				color: #e8e8e8;
				width: 80px;
				height: 40px !important;
		}
		
		.multiselect__select {
				border: 1px solid #e8e8e8;
				background: #fff;
				color: #e8e8e8;
				height: 40px;
		}
		
		.multiselect__tags {
				height: 40px !important;
				min-height: 30px !important;
				padding: 0;
		}
		
		.multi-select-language img {
				height: 25px;
				width: 25px;
				background-color: transparent;
		}
		
		.multi-select-language .option__title {
				color: #e8e8e8;
				background-color: transparent;
		}
		
		.multiselect__single {
				width: 28px;
				height: 28px;
				margin: 0 !important;
		}
		
		.multiselect__option--selected {
				background-color: grey;
		}
		
		.multiselect__option--highlight {
				background-color: royalblue;
				background: royalblue;
		}
</style>