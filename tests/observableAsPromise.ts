import { Observable } from 'rxjs';

export default <T>(
  observable: Observable<T>,
): Promise<T> => (
  new Promise((resolve, reject) =>
    observable
      .take(1)
      .subscribe(resolve, reject),
  )
);
