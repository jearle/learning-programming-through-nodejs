# Installing Node.JS

This chapter will teach you how to install Node.JS on your computer.  It is a straight forward, easy and painless process.

## Downloading Node.JS

Joyent has made it extremely easy to aquire and install Node.JS.  Simply go to [nodejs.org](http://nodejs.org/) and click INSTALL.

## Installing on OSX

On OSX the INSTALL button will download a .pkg file with a name similar to *node-v0.10.29.pkg*, the only difference may be the *v0.10.29* number, as this is a version number and will increase as time goes on.

Once the .pkg file is downloaded, you simply need to run through the steps of the installer to completion.

Now we will verify that the installation has worked correctly.

## Verifying Your Installation On OSX

In order to verify that the installation was successful.  Click on the magnifying glass in the top right of your screen.  This is called *Spotlight* and allows you to type in the name of a program to open it.

Type in the word *Terminal*.  This should give you a *Top Hit* of the *Terminal* application.  The icon looks like a block box with a *>* in it and a gray border. Click on it, or press the down arrow until it is highlighted and press enter.

Once the terminal application is on your screen.  Type the word `node` and press enter.  You should now see a *>* with a blinking cursor next to it.  Now type the phrase `console.log('Hello, World');`.  The output should look similar to the following.

```
> console.log('Hello, World');
Hello, World
undefined
>
```

Congratualtions, you just installed and executed your first program.