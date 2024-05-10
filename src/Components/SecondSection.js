import React from 'react'
import Accordion from './Accordion';

const SecondSection = () => {
  return (
    <>
    <h1 className='font-bold bg-gradient-to-b from-blue-950 to-blue-500 inline-block text-transparent bg-clip-text text-2xl'>FAQ</h1>
    <div className="max-w-2xl">
        <Accordion
          title="Can education flashcards be used for all age groups?"
          content="Flashcards are a study or memorisation tool, with information on one or both sides. Using flashcards is a versatile learning strategy that benefits students of all ages."
        />
        <Accordion
          title="How do education flashcards work?"
          content="Flashcards are effective because they promote active recall in your brain, which is the process by which we retrieve a memory. Seeing a term and then actively attempting to remember the meaning helps to move it from short-term to long-term memory."
        />
        <Accordion
          title="Can education flashcards be used for test preparation?"
          content="Flashcards are a great study tool if you need to memorize definitions, facts, or short pieces of information for a test—using cards like these is an active learning technique that promotes your recall ability (i.e. the process you use to retrieve memories and information)."
        />
      </div>
      </>
  )
}

export default SecondSection;