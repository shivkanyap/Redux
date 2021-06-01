import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addListAsync } from './counterSlice';
import { studentsList } from '../../mockData/mockdata';
export default function Counter() {
  const dispatch = useDispatch();
  const studentsListRedux = useSelector((state) => state.counter.value);

  return (
    <>
      <h2>Listing Students - {studentsListRedux.length} </h2>

      <button
        type='button'
        className='btn btn-primary'
        onClick={() => dispatch(addListAsync(studentsList))}
      >
        Click to dispatch the list of students to redux store
      </button>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => dispatch(addListAsync([]))}
        style={{ marginLeft: 50 }}
      >
        Click to Reset
      </button>

      {studentsListRedux.length === 0 ? (
        <div
          className='alert alert-danger'
          role='alert'
          style={{ width: '50%', marginLeft: 350, marginTop: 50 }}
        >
          No students found in redux store. Click above button to dispatch data
          to redux store
        </div>
      ) : (
        <table
          border='3'
          className='table'
          style={{ width: '70%', marginLeft: 200, marginTop: 50 }}
        >
          <thead>
            <tr>
              <th className='text-center'> # </th>
              <th className='text-center'> Name </th>
              <th className='text-center'> City </th>
              <th className='text-center'> Total Marks </th>
            </tr>
          </thead>
          <tbody>
            {studentsListRedux.map((student, index) => {
              return (
                <tr key={student.id}>
                  <td> {index + 1} </td>
                  <td>{student.name}</td>
                  <td>{student.city}</td>
                  <td>{student.totalMarks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
