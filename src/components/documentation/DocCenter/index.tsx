export default function DocCenter({ doc_center_ref, children }) {
  return (
    <div
      ref={doc_center_ref}
      className="w-full h-full overflow-y-auto track_transparent" 
      style={{marginRight:'-5px'}}
    >
      {children}
    </div>
  );
}
