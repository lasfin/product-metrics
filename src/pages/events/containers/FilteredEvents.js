import { connect } from 'react-redux';
import TableEvents from '../components/table-events/TableEvents';

const mapStateToProps = (state) => {
    return {
        events: state.events.filtered
    }
};

const FilteredEvents = connect(mapStateToProps)(TableEvents);

export default FilteredEvents;