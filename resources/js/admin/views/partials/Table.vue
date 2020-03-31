<template>
    <div>
        <input type="text" v-model="searchTerm" placeholder="Search" />
        <vue-good-table
            @on-row-click="onRowClick"
            :columns="columns"
            :rows="rows"
            theme="black-rhino"
            :search-options="{
                enabled: true,
                externalQuery: searchTerm
            }"
            :pagination-options="{
                enabled: true,
                perPage: 5
            }"
            styleClass="vgt-table striped bordered"
        >
            <template v-slot:table-row="props">
                <span v-if="props.column.field == 'actions'">
                    <i class="flaticon-delete" id="btnDelete"></i>
                    <i class="flaticon-avatar" id="btnDetails"></i>
                </span>
            </template>
        </vue-good-table>
    </div>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../app";
export default {
    // props: ["rows"],
    data() {
        return {
            columns: [
                {
                    label: "Id",
                    field: "id"
                    // type: ""
                },
                {
                    label: "Email",
                    field: "email"
                    // type: ""
                },
                {
                    label: "FirstName",
                    field: "first_name"
                    //  type: ""
                },
                {
                    label: "LastName",
                    field: "last_name"
                    //type: ""
                },
                {
                    label: "Avatar",
                    field: "avatar",
                    html: true
                },
                {
                    label: "Actions",
                    field: "actions",
                    sortable: false
                }
            ],
            rows: [],
            searchTerm: ""
        };
    },
    mounted() {
        this.fillTable();

        this.$root.$on("confirmDeleteUser", id => {
            this.DoDeleteUser(id);
        });
    },
    methods: {
        fillTable() {
            let $this = this;
            axios
                .get("https://reqres.in/api/users?page=2")
                .then(response => {
                    $this.rows = response.data.data;
                    for (let i = 0; i < response.data.data.length; i++) {
                        let res = response.data.data[i];
                        res.avatar = "<img src =" + res.avatar + ">";
                    }

                    // for( i=0;i<rows.length;i++){
                    //    console.log(response.data.data[i].avatar)
                    // }
                    // console.log(response);
                    //console.log(response.data.data[]);
                })
                .catch(error => console.log(error));
        },
        onRowClick(params) {
            console.log(params);
            switch (params.event.toElement.id) {
                case "btnDelete":
                    console.log("btnDelete");
                    this.$root.$emit("deleteUser", params.row); //all row data passed with the event
                    break;

                case "btnDetails":
                    console.log("btndetails");
                    // this.$router.push('userdetails')
                    this.$root.$emit("details", params.row);//$emit is for fireing the event
                    //تبليغ عن حدث مع تمرير ما تشاء من بيانات مع الحدث
                    break;
            }
            // params.row - row object
            // params.pageIndex - index of this row on the current page.
            // params.selected - if selection is enabled this argument
            // indicates selected or not
            // params.event - click event
        },
        DoDeleteUser(data) {//data = selectedRow
            //console.log(params);
            console.log(data.id); //call the api do delete user from server then refresh the table
            //this.rows.splice(this.rows.indexOf(params),1)
            axios
                .delete("https://reqres.in/api/users/" + data.id)
                .then(response => {
                    // this.fillTable();
                    var index = this.rows.findIndex(function(i) {
                        return i.id === data.id;
                    });
                   // var index = this.rows.indexOf(data);
                    this.rows.splice(index, 1);
                     this.$root.$emit("serverDeleteUser");

                })
                .catch(error => console.log(error));
        }
    }
};
</script>
<style scoped>
input {
    padding: 9px;
    margin-bottom: 10px;
    width: 195px;
}
</style>
