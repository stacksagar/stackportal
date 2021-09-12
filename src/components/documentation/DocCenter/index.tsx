import { ElementRef, useEffect, useRef, useState } from 'react';
import DocArticle from './DocArticle';

export default function DocCenter({doc_center_ref}) {
  return (
    <div
      ref={doc_center_ref}
      className="w-full px-8 lg:px-10 h-full overflow-y-auto track_transparent"
    >
      <DocArticle />
      <DocArticle />
      <DocArticle />
      <DocArticle />

      <article className=" min-h-screen_minus_header pt-10 px-5">
        <h1>Change Log</h1>
      </article>
    </div>
  );
}
