import { useCallback, useRef } from 'react';
import { debounce } from 'lodash';

export const useDebouncedDispatch = (dispatch, delay = 90) => {
  const debouncedDispatch = useRef(
    debounce((action) => dispatch(action), delay)
  ).current;

  return useCallback(
    (action) => debouncedDispatch(action),
    [debouncedDispatch]
  );
};