
:root {
    --border-radius: 2rem;
    --card-border-radius: 1rem;
    --btn-padding: 0.6rem 2rem;
    --search-padding: 0.6rem 1rem;
    --card-padding: 1rem;
    --color-white: hsl(234, 88%, 50%);
    --color-gray: hsl(248, 80%, 96%);
    --color-light: hsl(126, 15%, 13%);
    --color-dark: hsl(0, 0%, 100%);
    --color-primary: hsl(249, 33%, 96%);
    --color-success: hsl(194, 80%, 50%);
    --color-danger: hsl(310, 84%, 55%);
    --color-black: hsl(250, 23%, 95%);
    --sticky-top-left: 5.4rem;
    --sticky-top-right: -18rem;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    border: 0;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: var(--color-dark);
    background: var(--color-light);
    overflow-x: hidden;
  }
  
  .container {
    width: 80%;
    margin: 0 auto;
  }
  
  .profile-pic {
    width: 2.7rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }
  
  img {
    display: block;
    width: 100%;
  }
  
  .btn {
    display: inline-block;
    padding: var(--btn-padding);
    font-weight: 500;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 300ms ease;
  }
  
  .btn:hover {
    opacity: 0.8;
  }
  
  .btn-primary {
    background: var(--color-primary);
    color: var(--color-white);
  }
  
  .text-bold {
    font-weight: 500;
  }
  
  .text-muted {
    color: var(--color-gray);
  }
  
  nav {
    width: 100%;
    padding: 0.7rem 0;
    position: fixed;
    top: 0;
    z-index: 10;
    background: var(--color-white);
  }
  
  nav .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .search-bar {
    background: var(--color-light);
    border-radius: var(--border-radius);
    padding: var(--search-padding);
  }
  
  .search-bar input[type="search"] {
    background: transparent;
    width: 30vw;
  }
  
  nav .search-bar input[type="search"]::placeholder {
    color: var(--color-gray);
  }
  
  nav .create {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  main {
    position: relative;
    top: var(--sticky-top-left);
  }
  
  main .container {
    display: grid;
    grid-template-columns: 18vw auto 20vw;
    gap: 2rem;
    position: relative;
  }
  
  main .container .left {
    height: max-content;
    position: sticky;
    top: var(--sticky-top-left);
  }
  
  main .container .left .profle {
    padding: var(--card-padding);
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 100%;
  }
  
  .left .sidebar {
    margin-top: 1rem;
    background: var(--color-white);
    border-radius: var(--card-border-radius);
  }
  
  .left .sidebar .menu-item {
    display: flex;
    align-items: center;
    position: relative;
    height: 4rem;
    cursor: pointer;
    transition: all 300ms ease;
  }
  
  .left .sidebar .menu-item:hover {
    background: var(--color-light);
  }
  
  .left .sidebar i {
    font-size: 1.4rem;
    color: var(--color-gray);
    margin-left: 2rem;
    position: relative;
  }
  
  .left .sidebar i .notification-count {
    background: var(--color-danger);
    color: var(--color-white);
    font-size: 0.7rem;
    width: fit-content;
    border-radius: 0.8rem;
    padding: 0.1rem 0.4rem;
    position: absolute;
    top: -0.2rem;
    right: -0.3rem;
  }
  
  .left .sidebar h3 {
    margin-left: 1.5rem;
    font-size: 1rem;
  }
  
  .left .sidebar .active {
    background: var(--color-light);
  }
  
  .left.sidebar .active i,
  .left .sidebar .active h3 {
    color: var(--color-primary);
  }
  
  .left .sidebar .active::before {
    content: "";
    display: block;
    width: 0.5rem;
    height: 100%;
    position: absolute;
    background: var(--color-primary);
  }
  
  .left .sidebar .menu-item:first-child.active {
    border-top-left-radius: var(--card-border-radius);
    overflow: hidden;
  }
  
  .left .sidebar .menu-item:last-child.active {
    border-bottom-left-radius: var(--card-border-radius);
    overflow: hidden;
  }
  
  .left .btn {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
  
  .left .notifications-popup {
    position: absolute;
    top: 0;
    left: 110%;
    width: 30rem;
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    box-shadow: 0 0 2rem hsl(var(--color-primary), 75%, 60%, 25%);
    z-index: 8;
    display: none;
  }
  
  .left .notifications-popup::before {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    display: block;
    background: var(--color-white);
    position: absolute;
    left: -0.6rem;
    transform: rotate(45deg);
  }
  
  .left .notifications-popup > div {
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .left .notifications-popup small {
    display: block;
  }
  
  .middle .stories {
    display: flex;
    justify-content: space-between;
    height: 12rem;
    gap: 0.5rem;
  }
  
  .middle .stories .story {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    display: flex;
    flex-direction: column;
  }
  
