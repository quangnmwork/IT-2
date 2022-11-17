<template>
  <div v-if="editor">
    <button
      class="bg-cyan-400 p-2 focus:bg-cyan-500"
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      @click.prevent="() => editor.chain().focus().toggleHeading({ level: 1 }).run()"
    >
      H1
    </button>
    <button
      class="bg-cyan-400 p-2"
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      @click.prevent="() => editor.chain().focus().toggleHeading({ level: 2 }).run()"
    >
      H2
    </button>
    <button
      class="bg-cyan-400 p-2"
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      @click.prevent="() => editor.chain().focus().toggleHeading({ level: 3 }).run()"
    >
      H3
    </button>

    <button
      v-for="(btn, id) in buttonList"
      :key="id"
      class="bg-cyan-400 p-2"
      :class="{ 'is-active': editor.isActive(btn.name) }"
      @click.prevent="btn.onClick"
    >
      <span :class="btn.icon"></span>
    </button>
  </div>
  <editor-content :editor="editor" />
  <button class="bg-cyan-400 hover:bg-cyan-300 border-none outline-none float-right mt-5 mb-3 px-5 py-3 text-white rounded-sm">Create</button>
</template>

<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { Editor, EditorContent } from '@tiptap/vue-3';

const editor = new Editor({
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    BulletList.configure({
      HTMLAttributes: {
        class: 'list-disc',
      },
    }),
    ListItem.configure({
      HTMLAttributes: {
        class: 'list-decimal',
      },
    }),
    Image.configure({
      HTMLAttributes: {
        class: 'max-w-full h-auto',
      },
    }),
  ],
  content: `
       <p>This is your editor</p>
      `,
  editorProps: {
    attributes: { class: 'border-2 border-cyan-400 focus:outline-none min-h-[400px]' },
  },
});

interface ButtonProps {
  onClick: any;
  name: string;
  icon: string;
}

const buttonList: ButtonProps[] = [
  {
    icon: 'ri-bold',
    name: 'bold',
    onClick: () => editor.chain().focus().toggleBold().run(),
  },
  {
    icon: 'ri-italic',
    name: 'italic',
    onClick: () => editor.chain().focus().toggleItalic().run(),
  },
  {
    icon: 'ri-paragraph',
    name: 'paragraph',
    onClick: () => editor.chain().focus().setParagraph().run(),
  },
  {
    icon: 'ri-list-unordered',
    name: 'bulletList',
    onClick: () => {
      editor.chain().focus().toggleBulletList().run();
    },
  },
  {
    icon: 'ri-list-ordered',
    name: 'orderedList',
    onClick: () => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    icon: 'ri-image-line',
    name: 'image',
    onClick: () => {
      const url = window.prompt('URL Image');
      editor
        .chain()
        .focus()
        .setImage({ src: url || '' })
        .run();
    },
  },
  {
    icon: 'ri-align-center',
    name: 'center',
    onClick: () => {
      editor.chain().focus().setTextAlign('center').run();
    },
  },
  {
    icon: 'ri-align-left',
    name: 'left',
    onClick: () => {
      editor.chain().focus().setTextAlign('left').run();
    },
  },
  {
    icon: 'ri-align-right',
    name: 'right',
    onClick: () => {
      editor.chain().focus().setTextAlign('right').run();
    },
  },
];
</script>

<style lang="scss">
.ProseMirror {
  padding: 2rem 3rem;
  > * + * {
    margin-top: 0.75em;
  }
  ul,
  ol {
    padding: 0 1rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.2rem;
  }
}
</style>
