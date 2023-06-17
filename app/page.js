'use client'
import { useEffect, useState } from 'react'

import Question from '@/components/Question'
import { data } from '@/db/data'

import styles from './page.module.scss'

// Map question ids
const mappedData = [[],[],[]];
data.forEach((c, i) => c.questions.forEach(q => mappedData[i].push(q.id)))

export default function Home() {
  const [categoryId, setCategoryId] = useState(1);
  const [questionId, setQuestionId] = useState(1);
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);

  // Random question at start
  useEffect(() => {
    randomQuestion();
  }, [])

  useEffect(() => {
    const newCategory = data.find(c => c.id === categoryId);
    const newQuestion = newCategory.questions.find(q => q.id === questionId);
    setCategory(newCategory);
    setQuestion(newQuestion);
  }, [categoryId, questionId])

  const randomQuestion = () => {
    const noOfCategories = data.length;
    const randomCategory = Math.floor(Math.random() * (noOfCategories - 0) + 0);
    const noOfQuestions = data[randomCategory].questions.length;
    const randomQuestion = Math.floor(Math.random() * (noOfQuestions - 0) + 0);
    setQuestionId(mappedData[randomCategory][randomQuestion]);
    setCategoryId(randomCategory + 1);
  }

  return (
    <main className={styles.main}>
      {category && (
        <div className={styles.categoryInfo}>
          <h2>{`${category.id}. ${category.category}`}</h2>
          <p>{category.teacher}</p>
        </div>
      )}
      {question && <Question question={question} goNext={randomQuestion} />}
    </main>
  )
}
