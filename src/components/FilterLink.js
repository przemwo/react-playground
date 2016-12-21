import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './../actions/actions';

const Link = ({active, children, onClick}) => {
  if(active) {
    return(
      <span>{children}</span>
    );
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}>
      {children}
    </a>
  );
};
const mapStateToPropsLink = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToPropsLink = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};
const FilterLink = connect(mapStateToPropsLink, mapDispatchToPropsLink)(Link);

export default FilterLink;
