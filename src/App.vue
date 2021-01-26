<template>
  <div class="wrapper" @click="inputHide">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- message - передача пропс в компнент -->
          <message v-if="message" :message="message"/>
          <!-- new note -->
          <newNote :note="note" @addNote2="addNote"/>
          <div style="margin-top: 1rem" class="note-header">
            <h1>
              {{ title }}
            </h1>
            <search :value="search" 
                    placeholder="Find your note" 
                    @search="search = $event"
            />
            <!-- icons controls -->
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
          <!-- note list -->
          <notes :grid="grid" :notes="notesFilter" @remove="removeNote" @editNewTitle="editNewTitle"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue';
import notes from '@/components/Notes.vue';
import newNote from '@/components/NewNote.vue';
import search from '@/components/Search.vue';
// import func from '../vue-temp/vue-editor-bridge';

export default {
  components: {
      message,
      notes,
      newNote,
      search,
  },
  name: "App",
  data() {

    return {
      title: "Notes App",
      message: null,
      grid: true,
      search: '',
      note: {
        title: "",
        descr: "",
        importance: "Default",
      },
      notes: [
        {
          title: "First Note",
          descr: "Description for first note",
          date: new Date(Date.now()).toLocaleString(),
          importance: 'Default',
        },
        {
          title: "Second Note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleString(),
          importance: 'Default',
        },
        {
          title: "Third Note",
          descr: "Description for third note",
          date: new Date(Date.now()).toLocaleString(),
          importance: 'Default',
        },
      ],
    };
  },
  computed: {
    notesFilter() {
      let array = this.notes,
          search = this.search;
      if (!search) return array;
      // small 
      search = search.trim().toLowerCase();
      // Filter 
      array = array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      })
      return array;
    }
  },
  methods: {
    inputHide(e) {
      
      if (!e.target.classList.contains('titleEdit') && !e.target.classList.contains('noteTitle')) {
        document.querySelectorAll('.titleEdit').forEach(item => {
          if (item.classList.contains('active')) {
            item.classList.remove('active');
          }
        })
      }

    },
    editNewTitle(val, index) {
      this.notes[index].title = val;
    },
    addNote() {
      // console.log(this.note);
      let { title, descr, importance } = this.note;
      if (title == "") {
        this.message = "title can not be blank!";
        return false;
      }
      this.notes.push({
        title,
        descr,
        importance,
        date: new Date(Date.now()).toLocaleString(),
      });
      this.note.title = "";
      this.note.descr = "";
      this.message = null;
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    }
  },
};
</script>

<style lang="scss">
</style>
