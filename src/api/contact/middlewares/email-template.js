function emailTemplate(name, email, subject, message) {
  const emailHtml = `
    <table
  style="
    font-family: arial, helvetica, sans-serif;
    line-height: inherit;
    vertical-align: top;
    border-collapse: collapse;
    color: #000000;
  "
  role="presentation"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  border="0"
>
  <tbody style="line-height: inherit">
    <tr
      style="
        line-height: inherit;
        vertical-align: top;
        border-collapse: collapse;
      "
    >
      <td
        style="
          overflow-wrap: break-word;
          word-break: break-word;
          padding: 10px;
          font-family: arial, helvetica, sans-serif;
          line-height: inherit;
          vertical-align: top;
          border-collapse: collapse;
          color: #000000;
        "
        align="left"
      >
        <div
          style="
            font-size: 16px;
            font-weight: 700;
            line-height: 140%;
            text-align: center;
            word-wrap: break-word;
          "
        >
          <p style="line-height: 140%; margin: 0">Novo pedido de contacto</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<table
  style="
    font-family: arial, helvetica, sans-serif;
    line-height: inherit;
    vertical-align: top;
    border-collapse: collapse;
    color: #000000;
  "
  role="presentation"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  border="0"
>
  <tbody style="line-height: inherit">
    <tr
      style="
        line-height: inherit;
        vertical-align: top;
        border-collapse: collapse;
      "
    >
      <td
        style="
          overflow-wrap: break-word;
          word-break: break-word;
          padding: 10px;
          font-family: arial, helvetica, sans-serif;
          line-height: inherit;
          vertical-align: top;
          border-collapse: collapse;
          color: #000000;
        "
        align="left"
      >
        <div
          style="
            font-size: 14px;
            line-height: 140%;
            text-align: left;
            word-wrap: break-word;
          "
        >
          <p style="line-height: 140%; margin: 0">
            <strong style="line-height: inherit">Nome:</strong> ${name}
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<table
  style="
    font-family: arial, helvetica, sans-serif;
    line-height: inherit;
    vertical-align: top;
    border-collapse: collapse;
    color: #000000;
  "
  role="presentation"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  border="0"
>
  <tbody style="line-height: inherit">
    <tr
      style="
        line-height: inherit;
        vertical-align: top;
        border-collapse: collapse;
      "
    >
      <td
        style="
          overflow-wrap: break-word;
          word-break: break-word;
          padding: 10px;
          font-family: arial, helvetica, sans-serif;
          line-height: inherit;
          vertical-align: top;
          border-collapse: collapse;
          color: #000000;
        "
        align="left"
      >
        <div
          style="
            font-size: 14px;
            line-height: 140%;
            text-align: left;
            word-wrap: break-word;
          "
        >
          <p style="line-height: 140%; margin: 0">
            <strong style="line-height: inherit">Email:</strong> ${email}
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<table
  style="
    font-family: arial, helvetica, sans-serif;
    line-height: inherit;
    vertical-align: top;
    border-collapse: collapse;
    color: #000000;
  "
  role="presentation"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  border="0"
>
  <tbody style="line-height: inherit">
    <tr
      style="
        line-height: inherit;
        vertical-align: top;
        border-collapse: collapse;
      "
    >
      <td
        style="
          overflow-wrap: break-word;
          word-break: break-word;
          padding: 10px;
          font-family: arial, helvetica, sans-serif;
          line-height: inherit;
          vertical-align: top;
          border-collapse: collapse;
          color: #000000;
        "
        align="left"
      >
        <div
          style="
            font-size: 14px;
            line-height: 140%;
            text-align: left;
            word-wrap: break-word;
          "
        >
          <p style="line-height: 140%; margin: 0">
            <strong style="line-height: inherit">Assunto:</strong> ${subject}
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<table
  style="
    font-family: arial, helvetica, sans-serif;
    line-height: inherit;
    vertical-align: top;
    border-collapse: collapse;
    color: #000000;
  "
  role="presentation"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  border="0"
>
  <tbody style="line-height: inherit">
    <tr
      style="
        line-height: inherit;
        vertical-align: top;
        border-collapse: collapse;
      "
    >
      <td
        style="
          overflow-wrap: break-word;
          word-break: break-word;
          padding: 10px;
          font-family: arial, helvetica, sans-serif;
          line-height: inherit;
          vertical-align: top;
          border-collapse: collapse;
          color: #000000;
        "
        align="left"
      >
        <div
          style="
            font-size: 14px;
            line-height: 140%;
            text-align: left;
            word-wrap: break-word;
          "
        >
          <p style="line-height: 140%; margin: 0">
            <strong style="line-height: inherit">Mensagem:</strong> ${message}
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
`;

  const emailText = `Novo pedido de contacto. De: ${name}. Email: ${email}. Assunto: ${subject}. Mensagem: ${message}`;

  return { emailHtml, emailText };
}

module.exports = { emailTemplate };
