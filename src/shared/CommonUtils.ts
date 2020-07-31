import { v4 as uuidv4 } from 'uuid';

class CommonUtils {
  public static newGuid(): string {
    return uuidv4();
  }
}

export default CommonUtils;
