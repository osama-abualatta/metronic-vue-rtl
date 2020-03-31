<template>
    <div class="row form-row">
        <div class="col-md-8" style="margin-top:80px">
            <label style="font-weight:bold"> Name :</label>
            <input type="text" v-model="ClothesesType.name" />
            <select name="" id="">
                <option value="english">english</option>
                <option value="arabic">arabic</option>
            </select>
            <i class="la la-minus-circle" @click="deleteNode"></i>
            <div><i class="la la-plus-circle" @click="addNode"></i></div>
            <div>
                <label style="font-weight:bold"> Description :</label>
                <div>
                    <textarea
                        v-model="ClothesesType.discription"
                        name="text-des"
                        id=""
                        cols="40"
                        rows="5"
                    ></textarea>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div>
                <label style="font-weight:bold"> Name :</label>
            </div>
            <div>
                <input type="text" />
                <!--في حال اردنا عمل بايند مع خصائص غير معرفه مسبقا داخل الداتا فعند تعيين قيمة هذه الخصائص يجب استخدام-->
                <!--this.$set(this,'data_key','new_value')-->
                <!--وذلك لجعل الفيو تتعرف علي الخصائص الجديده-->
                <!--البديل عن كل هذا هو اعطاء قيم افتراضية  بحيث تكون كل الخصائص معرفه في الداتا وهو حل غير عملي لو كانت الخصائص كثيره-->
            </div>
            <div>
                <button
                    type="button"
                    class="btn btn-outline-success "
                    id="btnt"
                    @click="addParentNode"
                >
                    Add Parent Node
                </button>
            </div>
            <div>
                <button
                    type="button"
                    class="btn btn-outline-success "
                    @click="addChildNode"
                >
                    Add Child Node
                </button>
            </div>
            <div class="tree">
                <b-tree-view
                    :data="treeData"
                    :contextMenuItems="[
                        { code: 'DELETE_NODE', label: 'Delete node' },
                        { code: 'RENAME_NODE', label: 'Rename node' }
                    ]"
                    @nodeSelect="handelNodeSelect"
                >
                </b-tree-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            treeData: [
                {
                    id: 2,
                    name: "Clothes",
                    children: [
                        {
                            id: 3,
                            name: "Children Clothes",
                            children: [
                                {
                                    id: 3.1,
                                    name: "Newborn Clothes",
                                    discription: " this is children clotheses"
                                }
                            ]
                        },
                        { id: 4, name: "Woman Clothes" }
                    ]
                }
            ],
            ClothesesType: {}, //{id:0,name:''},
            SelectedNode: {}
        };
    },
    methods: {
        getRandomId() {
            return Math.floor(Math.random() * 1000) * -1;
        },
        addParentNode() {
            // var selectedNodeIndex = this.SelectedNode.$parent.data.children.findIndex(
            //     x => x.id == this.SelectedNode.data.id
            // );
            // this.SelectedNode.$parent.data.children.splice(
            //     selectedNodeIndex,
            //     1
            // );
            // var newIndex = this.SelectedNode.$parent.data.children.splice(
            //     selectedNodeIndex,
            //     0,
            //     {
            //         id: this.getRandomId(),
            //         name: "test",
            //         children: [this.SelectedNode.data]
            //     }
            // );
            //splice(index, 0, item);
            // this.SelectedNode.$parent.data.children[newIndex].children.push({id:-8,name:'gg'});
            if(this.SelectedNode.$parent.data.id){
             this.SelectedNode.$parent.appendChild({id:this.getRandomId(),name:'new'});
            }else{
                this.SelectedNode.$parent.data.push({id:this.getRandomId(),name:'newParent'});
            }
        },
        addChildNode() {
            // console.log(this.SelectedNode);
            // this.SelectedNode.data.children.push({
            //     id: this.getRandomId(),
            //     name: "test"
            // });
            this.SelectedNode.appendChild({id:this.getRandomId(),name:'ssss'});
        },
        handelNodeSelect(TreeNode, isSelected) {
            if (isSelected) {
                console.log(TreeNode);
                this.SelectedNode = TreeNode;
                // Object.assign(this.ClothesesType, TreeNode.data);
                this.$set(this, "ClothesesType", TreeNode.data);
                console.log(this.ClothesesType);
                //  this.$root.$emit("treeNodeSelected", TreeNode.data)
               //move to add parent function
            }
        },
        deleteNode() {
            console.log("selected node deleted");
            //to delete from array use this:
            //arrayName.splice(deleteIndex,1)

            //to findindex of object in array use this:
            //var deleteIndex = arrayName.findIndex(x=> x.id == deleteId); // in this case we search by id (deleteId is the if of object you want to delete)

            //in our case the arrName = this.SelectedNode.$parent.data.children // we want to delete this node from it's parent children array

           /* if (this.SelectedNode.$parent.data.id) {//check that the selected node has a parent
            var arrName = this.SelectedNode.$parent.data.children;
                var deleteIndex = arrName.findIndex(
                    x => x.id == this.SelectedNode.data.id
                );
                //كمل
                arrName.splice(deleteIndex, 1);
            }*/
            this.SelectedNode.delete();
        },
        addNode() {
            console.log("node added");
        }
    }
};
</script>

<style>
.form-row {
    font-size: 20px;
}
.btn {
    font-size: 20px;
    font-weight: 500;
}
#btnt {
    margin: 30px 0px 9px 0px;
}
.la-plus-circle {
    font-size: 30px;
    color: #34bfa3;
    margin-left: 200px;
    padding: 30px;
}
.la-minus-circle {
    font-size: 30px;
    color: red;
    margin-left: 30px;
}
.tree {
    margin-top: 30px;
}
</style>
