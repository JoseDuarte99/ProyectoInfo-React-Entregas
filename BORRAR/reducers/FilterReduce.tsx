import { INITIAL_STATE } from "../typing/Typing";
import { FilterType, type actionFilterProps, type FilterStateProps } from "../typing/Typing";


function FilterReduce(state: FilterStateProps, action: actionFilterProps): FilterStateProps {

    const newState = [...state] as FilterStateProps;
    
    switch (action.type) {
        case FilterType.Category:
            newState[0] = { type: FilterType.Category, name: action.payload };
            break;
        
        case FilterType.PriceMax:
            newState[1] = { type: FilterType.PriceMax, max: Number(action.payload) };
            break;
        
        case FilterType.PriceMin:
            newState[2] = { type: FilterType.PriceMin, min: Number(action.payload) };
            break;
        
        case FilterType.Promotion:
            newState[3] = { type: FilterType.Promotion, id: action.payload };
            break;

        case FilterType.Reset:
            return INITIAL_STATE;
    }
    
    return newState;
}

export default FilterReduce;