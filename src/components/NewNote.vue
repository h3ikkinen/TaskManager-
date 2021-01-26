<template>
    <div class="new-note">
        <label>Title</label>
        <div>
            <input v-model="note.title" type="text" />
        </div>
        <label >Description</label>
        <div>
            <textarea v-model="note.descr"></textarea>
        </div>
        <h2 class="inpTitle">Choose the importance of the note</h2>
        <div>

            <div class="input__container">
                <input type="radio" id="Default" value="Default" v-model="note.importance">
                <label for="Default">Default</label>
            </div>
            <div class="input__container">
                <input type="radio" id="medium" value="medium" v-model="note.importance">
                <label for="medium">Medium</label>
            </div>
            <div class="input__container">
                <input type="radio" id="hard" value="hard" v-model="note.importance">
                <label for="hard">Hard</label>
            </div>


            <span>Choose: {{ note.importance }}</span>
        </div>
        <button @click="addNote" class="btn btnPrimary">New Note</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true,
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote2', this.note)
        }
    }
}
</script>

<style lang="scss" scoped>
    .new-note {
        text-align: center;
    }
    .btn {
        margin-top: 1rem;
    }
    .inpTitle {
        margin-top: 2rem;
    }
    .input__container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        max-width: 400px;
        margin: 0 auto;
        margin-top: 1rem;
        &:nth-child(3) {
            margin-bottom: 1rem;
        }
        input[type="radio"] {
            margin: 0;
            display: inline;
            padding: 0;
            width: auto;

        }
        label {
            margin: 0;
            padding-left: 10px;
        }
    }
    // .priority {
    //     width: 100%;
    //     display: flex;
    //     align-items: start;
    //     justify-content: space-around;
    //     margin-top: 1rem;
    //     div {
            
    //         display: flex;
    //         align-items: start;
    //         input {
    //             margin-right: 1rem;
    //             z-index: 30;
    //             width: 20px;
    //             height: 20px;
    //         }
    //     }
    // }
</style>