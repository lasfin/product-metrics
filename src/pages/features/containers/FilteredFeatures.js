import { connect } from 'react-redux';
import TableFeatures from '../components/table-features/TableFeatures';

const mapStateToProps = (state) => {
    return {
        features: state.features.filtered
    }
};

const FilteredFeatures = connect(mapStateToProps)(TableFeatures);

export default FilteredFeatures;
