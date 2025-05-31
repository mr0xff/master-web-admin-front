import { test, expect } from 'vitest';
import { Storage } from '../src/lib/utils';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test("Key Storage Class", ()=>{
  render();
  Storage.setKey("string");
  expect(Storage.getKey()).toBe("string");
})