'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h2>Welcome to TipTap Editor!</h2>
      <p>Start typing or modify this text...</p>
    `,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <EditorContent
        editor={editor}
        className="border border-gray-300 rounded-md p-4 w-full max-w-3xl shadow-md focus:outline-none"
      />
    </div>
  );
};

export default TipTapEditor;
