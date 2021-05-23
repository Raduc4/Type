import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const searchRepo = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    });
    try {
      const { data } = await axios.get(
        "http://registry.npmjs.com/-/v1/search",
        {
          // headers: "Access-Control-Allow-Origin",
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: error.message,
      });
    }
  };
};
