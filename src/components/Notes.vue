<template>
    <div class="notes">
        <div class="note" :class="{full: !grid, hard: note.importance == 'hard', main: note.importance == 'medium' }" v-for="(note, index) in notes" :key="index">
        <div class="note-header">
            <h2 class="noteTitle" @click="editTitle(note.title, index)" >{{ note.title }}</h2>
            <input v-on:keyup.enter="editNewTitle(val, index)" v-on:keyup.esc="editOldTitle(note.title, index)" v-model="val" type="text" class="titleEdit" >
            <p style="cursor: pointer; " @click="removeNote(index)"> x</p>
        </div>
        <div class="note-body">
            <p>
            {{ note.descr }}
            </p>
            <span>
            {{ note.date }}
            </span>
        </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true,
        },
        grid: {
            type: Boolean,
            required: true,
        }
    },
    data () {
        return { 
            val: '',
            oldVal: '',
        }
    },
    methods: {
        editOldTitle(val, index) {
            let input = document.querySelectorAll('.titleEdit')[index];
            input.classList.toggle('active');
            this.val = this.oldVal;
        },
        removeNote(index) {
            console.log(`Note ${index} - removed`);
            this.$emit('remove', index);
        },
        editTitle(val, index) {
            // console.log(val);
            this.oldVal = val;
            let input = document.querySelectorAll('.titleEdit')[index];
            let inputs = document.querySelectorAll('.titleEdit');
            inputs.forEach(item => {
                item.classList.remove('active');
            })
            input.classList.toggle('active');
            input.focus();
            this.val = val;
            
        },
        editNewTitle(val, index) {
            // console.log(val);
            if (val != '') {

                let input = document.querySelectorAll('.titleEdit')[index];
                
                input.classList.toggle('active');
                this.$emit('editNewTitle', val, index);
            } else {
                return false;
            }
        }
    }
}
</script>


<style lang="scss">
    .notes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }
    .note {
        width: 50%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 5px;
        &.full {
            width: 100%;
        }
        &.hard {
            background-color: red;
            color: #fff;
        }
        &.main {
            background-color: orange;
                  color: #fff;
        }
    }
    .note-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        input {
            position: absolute;
            left: 0;
            top: 2px;
            z-index: 0;
            visibility: hidden;
            opacity: 0;
            width: 100%;
            height: 40px;
            border-radius: 0;
            padding: 0;
            outline: none;
            border: none;
            box-shadow: none;
            &.active {
                visibility: visible;
                opacity: 1;
                color: #402caf;
                font-size: 32px;
                font-weight: 600;
                z-index: 40;
            }
        }
        h2 {
            display: block;
            font-size: 32px;
            z-index: 30;
            cursor: pointer;
        }
        h2 {
            color: #402caf;
            font-weight: 600;
        }
        svg {
            margin-right: 12px;
            color: #999999;
            cursor: pointer;
            &.active {
                color: #402caf;
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
    .note-body {
        p {
            margin: 20px 0;
        } 
        span {
            font-size: 14px;
            color: #999;
        }
    }
</style>
