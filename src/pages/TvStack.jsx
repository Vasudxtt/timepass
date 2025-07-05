import React from 'react';

export default function Tv() {
  return (
    <div className="flex justify-center items-center h-2 mt-[25%]">
      <p className="text-2xl text-purple-800">
        A stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. It's like a stack of plates where the last plate placed on top is the first one you remove. Common operations include push (adding an element) and pop (removing an element). Stacks are used in various applications like expression evaluation, syntax parsing, and function call management. 
Key characteristics:
LIFO (Last-In, First-Out): The last element added is the first one removed. 
One open end: Elements are added and removed from the top. 
Limited access: You can only access the top element. 
Overflow: Occurs when trying to push onto a full stack. 
Underflow: Occurs when trying to pop from an empty stack. 
Common operations:
Push: Adds an element to the top of the stack.
Pop: Removes the top element from the stack.
Peek/Top: Returns the top element without removing it.
isEmpty: Checks if the stack is empty.
isFull: Checks if the stack is full. 
      </p>
    </div>
  );
}