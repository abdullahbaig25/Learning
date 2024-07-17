import React, { useState, useEffect } from 'react';
import Sidebar from '../components/LeftSidebar/index.js';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { routesName } from '../routes/adminConstants.js';

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);
  const [prevLocation, setPrevLocation] = useState('');
  const [loadingText, setLoadingText] = useState('Loading');
  const { payload: loginData } = useSelector(
    (state) => state?.LOGINREDUCER?.loginData
  );
  const token = loginData?.accessToken;
  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (!token) {
      // navigate(routesName.LoginPage);
    }
  }, [token]);

  const location = useLocation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case 'Loading':
            return 'Loading.';
          case 'Loading.':
            return 'Loading..';
          case 'Loading..':
            return 'Loading...';
          default:
            return 'Loading';
        }
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (prevLocation !== location.pathname) {
      setShowLoader(true);
      setPrevLocation(location.pathname);
      setTimeout(() => {
        setShowLoader(false);
      }, 3000);
    }
  }, [prevLocation, location.pathname]);

  return (
    <div className={`main-wrapper-content ${active && "active"}`}>
      <>
        {/* <Topbar toggleActive={toggleActive} /> */}
        <Sidebar toggleActive={toggleActive} />
      </>
      <div className="main-content">
        {showLoader ? (
          <div className='flex justify-center items-center h-screen'>
            <CircularProgress
              size={40}
              sx={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
              }}
            />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Layout;
