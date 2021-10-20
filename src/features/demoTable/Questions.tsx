import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import styles from './Counter.module.css';
import { changePage, getCurrentPage, getError, getLoading, selectQuestions } from './questionsSlice';
import {
  getData
} from './questionsSlice';

import { message, Button, Modal } from 'antd';
import { Table, Tag, Space } from 'antd';

import { useMemo } from 'hoist-non-react-statics/node_modules/@types/react';
import { debounce } from 'ts-debounce';

export function Questions() {


  const dispatch = useAppDispatch();
  const questions = useAppSelector(selectQuestions);
  const loading = useAppSelector(getLoading);
  const paginnation = useAppSelector(getCurrentPage);
  const error = useAppSelector(getError);

  const columns = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'question_id',
      dataIndex: 'question_id',
      key: 'question_id',
    },
    {
      title: 'question_detail',
      dataIndex: 'question_detail',
      key: 'question_detail',
    },
    {
      title: 'type',
      dataIndex: 'type',
      key: 'type',
    },
  ]

  const handleTableChange = (pagination: object) => {
    dispatch(changePage(pagination));
  };


  useEffect(() => {
    if (error && error.status !== 200) {
      message.info(error.message);
    }
  }, [error]);

  useEffect(() => {
    console.log("1111111111111111")
    dispatch(getData({
      offset: paginnation.current,
      limit: "5"
    }));
  }, [paginnation]);

  const debouncex = debounce(() => {
    dispatch(getData({
      offset: paginnation.current,
      limit: "5"
    }));
  }, 1000);


  console.log("render")
  return (
    <div>

      <button onClick={debouncex}>Click me</button>
      <Table columns={columns}
        dataSource={questions.listQuestion}
        onChange={handleTableChange}
        pagination={paginnation}
        tableLayout="fixed"
        loading={loading}

      />

    </div>
  );
}
