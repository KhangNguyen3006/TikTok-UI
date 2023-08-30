import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss'

import images from '~/assets/images'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";

import Button from '~/commponents/Button'
import { Wrapper as PopperWrapper } from "~/commponents/Popper";
import AccountItem from "~/commponents/AccountItem";

const cx = classNames.bind(styles)

function Header() {



  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 3000);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>

        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" srcSet="" />
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={attrs => (
            <div className={cx("search-result")}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >

          <div className={cx('search')}>
            <input placeholder="Tìm kiếm" spellCheck={false} /> {/* spellCheck : kiểm tra lỗi chính tả và gạch chân đỏ */}
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <Tippy content="Tìm kiếm" placement="right">
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Tippy>
          </div>
        </Tippy>

        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
          <Button rounded>Get app</Button>
          {/* <Button outline small>Folow</Button> */}
          {/* <Button outline large>Log in</Button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;

