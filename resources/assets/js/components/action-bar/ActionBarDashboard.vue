<template>
    <SharpActionBar>
        <template slot="extras">
            <div class="row mx-n2">
                <template v-for="filter in filters">
                    <div class="col-auto px-2">
                        <SharpFilter
                            :filter="filter"
                            :value="filterValue(filter.key)"
                            @input="handleFilterChanged(filter, $event)"
                            :key="filter.id"
                        />
                    </div>
                </template>
            </div>
        </template>
        <template v-if="commands.length" slot="extras-right">
            <SharpCommandsDropdown class="SharpActionBar__actions-dropdown SharpActionBar__actions-dropdown--commands"
                :commands="commands"
                @select="handleCommandSelected"
            >
                <div slot="text">
                    {{ l('dashboard.commands.dashboard.label') }}
                </div>
            </SharpCommandsDropdown>
        </template>
    </SharpActionBar>
</template>

<script>
    import SharpActionBar from './ActionBar.vue';
    import SharpFilter from '../list/Filter';
    import SharpCommandsDropdown from '../commands/CommandsDropdown.vue';
    import { Localization } from "../../mixins";
    import { mapGetters } from 'vuex';

    export default {
        name: 'SharpActionBarDashboard',
        mixins: [Localization],
        components: {
            SharpActionBar,
            SharpFilter,
            SharpCommandsDropdown,
        },
        props: {
            commands: Array,
        },
        computed: {
            ...mapGetters('dashboard', {
                filters: 'filters/filters',
                filterValue: 'filters/value',
                filterNextQuery: 'filters/nextQuery',
            })
        },
        methods: {
            filterKey(filter) {
                return `actionbardashboard_${filter.key}`;
            },
            handleFilterChanged(filter, value) {
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        ...this.filterNextQuery({ filter, value }),
                    }
                });
            },
            handleCommandSelected(command) {
                this.$emit('command', command);
            }
        }
    }
</script>