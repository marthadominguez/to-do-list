import React from 'react';

export const TodoList = (props) => {
  return <div>
    <section>
      <ul>{props.children}</ul>
    </section>
  </div>;
};
