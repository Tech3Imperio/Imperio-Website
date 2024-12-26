import React, { Suspense } from "react";

const InstagramAdForm = React.lazy(
  () => import("../../components/InstagramAdForm/InstagramAdForm")
);

export default function InstagramForm() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <InstagramAdForm />
      </Suspense>
    </div>
  );
}
