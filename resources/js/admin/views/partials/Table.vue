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
import { EventBus } from '../../app';
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
        axios
            .get("https://reqres.in/api/users?page=2")
            .then(response => {
                this.rows = response.data.data;
                for (let i = 0; i <= response.data.data.length; i++) {
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
    methods: {
        onRowClick(params) {
            console.log(params);
            switch (params.event.toElement.id) {
                case "btnDelete":
                    console.log("btnDelete");
                    this.$emit("deleteUser", params.row); //all row data passed with the event
                    break;

                case "btnDetails":
                    this.$router.push('userdetails')
                   // this.$emit("details", params.row);
                    //console.log("btndetails");
                    break;
            }
            // params.row - row object
            // params.pageIndex - index of this row on the current page.
            // params.selected - if selection is enabled this argument
            // indicates selected or not
            // params.event - click event
        },
        DoDeleteUser(id){
//console.log(params);
console.log(this.row.id);//call the api do delete user from server then refresh the table
 //this.rows.splice(this.rows.indexOf(params),1)
 if(id>-1){
 //this.params.splice(this.params,1);
 }
        },
        //   deleteRow: function(resource) {
        //     //console.log(event)\
        //     this.resources.splice(this.resources.indexOf(resource), 1);
        // }

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
