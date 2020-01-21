import loadable from "react-loadable";
import {PageLoading} from "../commpents/common/Loading";



export function handleloadableComponent(component: () => Promise<any>) {

  return loadable({
    loader: component,
    loading: PageLoading
  });
}

