// Custom Element: NotesHeader
class NotesHeader extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <header>
                <h1>Notes App</h1>
            </header>
        `;
    }
}

// Custom Element: ImageFigure
class ImageFigure extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.applyStyles();
    }

    render() {
        this.innerHTML = `
            <figure class="image-figure">
                <img src="hero.jpg" alt="Bagian hero">
                <figcaption>Selamat Datang Di Web Note App Sederhana</figcaption>
            </figure>
        `;
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .image-figure {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 50px auto; /* Menggeser elemen ke bawah dengan margin-top */
                width: 60%; /* Sesuaikan lebar sesuai kebutuhan */
                max-width: 600px; /* Mencegah terlalu lebar pada layar besar */
            }

            .image-figure img {
                width: 100%;
                height: auto;
                border-radius: 10px; /* Opsional: menambahkan sudut membulat */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Opsional: menambahkan bayangan */
            }

            .image-figure figcaption {
                text-align: center;
                margin-top: 10px;
                font-size: 1.2em;
                color: #555; /* Sesuaikan warna sesuai kebutuhan */
            }

            /* Penyesuaian responsif */
            @media (max-width: 768px) {
                .image-figure {
                    width: 90%;
                }

                .image-figure figcaption {
                    font-size: 1em;
                }
            }

            @media (max-width: 480px) {
                .image-figure {
                    width: 100%;
                }

                .image-figure figcaption {
                    font-size: 0.9em;
                }
            }
        `;
        this.appendChild(style);
    }
}

// Custom Element: AddNoteForm
class AddNoteForm extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <main>
                <form id="add-note-form">
                    <input type="text" id="note-title" placeholder="Judul" required>
                    <textarea id="note-content" placeholder="Pesan" required></textarea>
                    <button type="submit">Tambahkan Catatan</button>
                </form>
            </main>
        `;
    }
}

// Custom Element: NotesList
class NotesList extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="note-list" class="note-list"></div>
        `;
        this.renderNotes();
    }

    renderNotes() {
        const noteList = this.querySelector('#note-list');
        noteList.innerHTML = '';

        notesData.forEach((noteData) => {
            const note = document.createElement('div');
            note.classList.add('note');

            const noteTitle = document.createElement('h2');
            noteTitle.textContent = noteData.title;
            noteTitle.style.overflow = 'hidden';
            noteTitle.style.textOverflow = 'ellipsis';
            noteTitle.style.whiteSpace = 'nowrap';

            const noteContent = document.createElement('p');
            noteContent.textContent = noteData.body;
            noteContent.style.overflowY = 'auto';
            noteContent.style.maxHeight = '100px';

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                notesData = notesData.filter((note) => note.id !== noteData.id);
                saveToLocalStorage(notesData);
                this.renderNotes();
            });

            note.appendChild(noteTitle);
            note.appendChild(noteContent);
            note.appendChild(deleteBtn);

            noteList.appendChild(note);
        });
    }
}

// Define custom elements
customElements.define('notes-header', NotesHeader);
customElements.define('image-figure', ImageFigure);
customElements.define('add-note-form', AddNoteForm);
customElements.define('notes-list', NotesList);

// Data catatan dari local storage 
let notesData = JSON.parse(localStorage.getItem('notesData')) || [
    {
        id: 'notes-jT-jjsyz61J8XKiI',
        title: 'Welcome to Notes, Dimas!',
        body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
        createdAt: '2022-07-28T10:03:12.594Z',
        archived: false,
      },
      {
        id: 'notes-aB-cdefg12345',
        title: 'Meeting Agenda',
        body: 'Discuss project updates and assign tasks for the upcoming week.',
        createdAt: '2022-08-05T15:30:00.000Z',
        archived: false,
      },
      {
        id: 'notes-XyZ-789012345',
        title: 'Shopping List',
        body: 'Milk, eggs, bread, fruits, and vegetables.',
        createdAt: '2022-08-10T08:45:23.120Z',
        archived: false,
      },
      {
        id: 'notes-1a-2b3c4d5e6f',
        title: 'Personal Goals',
        body: 'Read two books per month, exercise three times a week, learn a new language.',
        createdAt: '2022-08-15T18:12:55.789Z',
        archived: false,
      },
      {
        id: 'notes-LMN-456789',
        title: 'Recipe: Spaghetti Bolognese',
        body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
        createdAt: '2022-08-20T12:30:40.200Z',
        archived: false,
      },
      {
        id: 'notes-QwErTyUiOp',
        title: 'Workout Routine',
        body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
        createdAt: '2022-08-25T09:15:17.890Z',
        archived: false,
      },
      {
        id: 'notes-abcdef-987654',
        title: 'Book Recommendations',
        body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
        createdAt: '2022-09-01T14:20:05.321Z',
        archived: false,
      },
      {
        id: 'notes-zyxwv-54321',
        title: 'Daily Reflections',
        body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
        createdAt: '2022-09-07T20:40:30.150Z',
        archived: false,
      },
      {
        id: 'notes-poiuyt-987654',
        title: 'Travel Bucket List',
        body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
        createdAt: '2022-09-15T11:55:44.678Z',
        archived: false,
      },
      {
        id: 'notes-asdfgh-123456',
        title: 'Coding Projects',
        body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
        createdAt: '2022-09-20T17:10:12.987Z',
        archived: false,
      },
      {
        id: 'notes-5678-abcd-efgh',
        title: 'Project Deadline',
        body: 'Complete project tasks by the deadline on October 1st.',
        createdAt: '2022-09-28T14:00:00.000Z',
        archived: false,
      },
      {
        id: 'notes-9876-wxyz-1234',
        title: 'Health Checkup',
        body: 'Schedule a routine health checkup with the doctor.',
        createdAt: '2022-10-05T09:30:45.600Z',
        archived: false,
      },
      {
        id: 'notes-qwerty-8765-4321',
        title: 'Financial Goals',
        body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
        createdAt: '2022-10-12T12:15:30.890Z',
        archived: false,
      },
      {
        id: 'notes-98765-54321-12345',
        title: 'Holiday Plans',
        body: 'Research and plan for the upcoming holiday destination.',
        createdAt: '2022-10-20T16:45:00.000Z',
        archived: false,
      },
      {
        id: 'notes-1234-abcd-5678',
        title: 'Language Learning',
        body: 'Practice Spanish vocabulary for 30 minutes every day.',
        createdAt: '2022-10-28T08:00:20.120Z',
        archived: false,
      },
];

// Fungsi untuk menyimpan data catatan ke local storage
function saveToLocalStorage(data) {
    localStorage.setItem('notesData', JSON.stringify(data));
}

// Fungsi untuk merender catatan
function renderNotes() {
    const noteList = document.querySelector('#note-list');
    noteList.innerHTML = '';

    notesData.forEach((noteData) => {
        const note = document.createElement('div');
        note.classList.add('note');

        const noteTitle = document.createElement('h2');
        noteTitle.textContent = noteData.title;
        noteTitle.style.overflow = 'hidden';
        noteTitle.style.textOverflow = 'ellipsis';
        noteTitle.style.whiteSpace = 'nowrap';

        const noteContent = document.createElement('p');
        noteContent.textContent = noteData.body;
        noteContent.style.overflowY = 'auto';
        noteContent.style.maxHeight = '100px';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            notesData = notesData.filter((note) => note.id !== noteData.id);
            saveToLocalStorage(notesData);
            renderNotes();
        });

        note.appendChild(noteTitle);
        note.appendChild(noteContent);
        note.appendChild(deleteBtn);

        noteList.appendChild(note);
    });
}

// Render catatan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderNotes();
});

// Ambil elemen form
const form = document.getElementById('add-note-form');

// Tangani pengiriman formulir
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('note-title');
    const contentInput = document.getElementById('note-content');

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
        // Buat objek catatan baru
        const newNote = {
            id: `note-${Date.now()}`,
            title,
            body: content,
            createdAt: new Date().toISOString(),
            archived: false,
        };

        // Tambahkan catatan baru ke notesData
        notesData.push(newNote);

        // Simpan data catatan ke local storage
        saveToLocalStorage(notesData);

        // Render catatan lagi
        renderNotes();

        // Reset formulir
        form.reset();
    }
});
