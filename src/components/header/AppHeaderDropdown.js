import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import { cilUser, cilSettings } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMessage,
  faBell,
  faUser,
  faLockOpen,
} from '@fortawesome/free-solid-svg-icons';

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilUser} className="me-2" style={{ fontWeight: '10' }} />
        Admin Login
      </CDropdownToggle>
      <CDropdownMenu
        className="pt-0"
        style={{ borderRadius: '4px' }}
        placement="bottom-end"
      >
        <CDropdownItem
          href="#"
          style={{ paddingTop: '10px' }}
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.clear();
          }}
        >
          <div
            className="d-flex"
            style={{
              alignSelf: 'center',
              marginRight: '20px',
              justifyContent: 'space-between',
            }}
          >
            <CIcon
              className=""
              to="/"
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.clear();
                window.location.href = '/Login';
              }}
            />
            <div className="">
              {' '}
              <FontAwesomeIcon icon={faLockOpen} style={{ color: '#056078' }} />
            </div>
            <div
              className=""
              style={{
                color: '#056078',
                paddingTop: '10px',
                marginRight: '20px',
              }}
            >
              Log out
            </div>
          </div>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
