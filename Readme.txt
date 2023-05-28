1. install nodejs:- sudo apt install nodejs
2. clone github repository of website:- git clone https://github.com/Sidd-R/IEEE_SPIT_WEBSITE
3. Go to the project directory:- cd IEEE_SPIT_WEBSITE
4. install required node modules:- npm install
5. create production build of app:- npm run build
6. install nginx:- sudo apt install nginx
7. Now run the following command: sudo nano /etc/nginx/sites-available/IEEE_SPIT_WEBSITE
8. paste the content below into the file created by nano after replacing the appropriate data:-
server {
<server_name> your_IP abcd.com www.abcd.com;
root /home/username/IEEE_SPIT_WEBSITE/build;
index index.html index.htm;
location / {
try_files $uri /index.html =404;
}
}
9. Now run the following commands: 
sudo ln -s /etc/nginx/sites-available/react_counter /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx
10. After following the above steps, the website woulb have been hosted 