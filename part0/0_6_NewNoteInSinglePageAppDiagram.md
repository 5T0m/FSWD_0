```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a message in the text field and clicks on submit.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: New note is posted to the server which the html and new html is sent back. 

```