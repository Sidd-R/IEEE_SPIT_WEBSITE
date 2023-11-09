1. Install Node.js:
```shell
sudo apt install nodejs
```

2. Clone Github repository of Website:
``` shell
git clone https://github.com/Sidd-R/IEEE_SPIT_WEBSITE
```

3. Go to the project directory:
``` shell
cd IEEE_SPIT_WEBSITE
```

4. Install the required Node.js modules:
``` shell
npm install
```

5. Create a Production build of app:
``` shell
npm run build
```

6. Install Nginx:   
``` shell
sudo apt install nginx
```

7. Now run the following command:
``` shell
sudo nano /etc/nginx/sites-available/IEEE_SPIT_WEBSITE
```

8. Paste the following content into the file created by nano, replacing <server_name>, your_IP, abcd.com, www.abcd.com, and username with appropriate data:
``` nginx
server {
    <server_name> your_IP abcd.com www.abcd.com;
    root /home/username/IEEE_SPIT_WEBSITE/build;
    index index.html index.htm;
    location / {
        try_files $uri /index.html =404;
    }
}
```

9. Now run the following commands:
``` shell
sudo ln -s /etc/nginx/sites-available/react_counter /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx
```

10. After following the above steps, the website would have been hosted.