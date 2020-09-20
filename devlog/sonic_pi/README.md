---
Title: Sonic-Pi
Blog: false
---

Issues installing [`sonic-pi`](https://github.com/sonic-pi-net/sonic-pi/blob/main/INSTALL-LINUX.md) on arch.


The default `sonic-pi` package from community failed to launch because of JACK errors; [errorlog](https://gist.github.com/seanbreckenridge/99fa2e3d94d30b3193a903634990f06f)

```
JACK is running in realtime mode, but you are not allowed to use realtime scheduling.
Please check your /etc/security/limits.conf for the following line
and correct/add it if necessary:

  @audio          -       rtprio          99

After applying these changes, please re-login in order for them to take effect.

You don't appear to have a sane system configuration. It is very likely that you
encounter xruns. Please apply all the above mentioned changes and start jack again!
connect(2) call to /dev/shm/jack-1000/default/jack_0 failed (err=No such file or directory)

JACK is running in realtime mode, but you are not allowed to use realtime scheduling.
Please check your /etc/security/limits.conf for the following line
and correct/add it if necessary:

  @audio          -       rtprio          99

After applying these changes, please re-login in order for them to take effect.``
```

After adding that line to `/etc/security/limits.conf` and restarting, it errored with:

```
JACK is running in realtime mode, but you are not allowed to use realtime scheduling.

Your system has an audio group, but you are not a member of it.
Please add yourself to the audio group by executing (as root):
  usermod -a -G audio sean
```

So, I ran: `sudo usermod -aG audio "$(whoami)"`

Should be noted that the [arch wiki](https://wiki.archlinux.org/index.php/JACK_Audio_Connection_Kit) says to instead manually add your user to the `realtime` group, but sonic-pi needs you to be running this manually, so, not going to do that.

After restarting:

```
$ groups
docker users video audio wheel
```

After that, running `sonic-pi` causes this error:

```
connect(2) call to /dev/shm/jack-1000/default/jack_0 failed (err=No such file or directory)
could not open driver .so '/usr/lib/jack/jack_net.so': libcelt0.so.2: cannot open shared object file: No such file or directory

could not open driver .so '/usr/lib/jack/jack_firewire.so': libffado.so.2: cannot open shared object file: No such file or directory
```

Should be noted I use `pulseaudio` instead of `alsa`. Seems that `JACK` works better with `alsa` (i.e. it has a backend for it, see `man jackd`.

I found the solution to this on [this](https://github.com/sonic-pi-net/sonic-pi/issues/1908) issue; which is to run:

```
jackd -R -d alsa -d hw:1  # in another terminal
sonic-pi
```

Made this into a script:

```
#!/bin/bash

jackd -R -d alsa -d hw:1 &
sonic-pi # block

kill $(jobs -p)
```

I'm not totally clear on *why* this works, because I do believe I'm using `pulseaudio` and not `alsa`, but it does. The output still has the error from above, but it seems the `jackd` that is run manually communicates with `sonic-pi` instead of a daemon running in the background:

```
$ ./sonic-pi-run
jackd 0.125.0
Copyright 2001-2009 Paul Davis, Stephane Letz, Jack O'Quinn, Torben Hohn and others.
jackd comes with ABSOLUTELY NO WARRANTY
This is free software, and you are welcome to redistribute it
under certain conditions; see the file COPYING for details

could not open driver .so '/usr/lib/jack/jack_net.so': libcelt0.so.2: cannot open shared object file: No such file or directory

could not open driver .so '/usr/lib/jack/jack_firewire.so': libffado.so.2: cannot open shared object file: No such file or directory

JACK compiled with System V SHM support.
cannot lock down memory for jackd (Cannot allocate memory)
loading driver ..
creating alsa driver ... hw:1|hw:1|1024|2|48000|0|0|nomon|swmeter|-|32bit
configuring for 48000Hz, period = 1024 frames (21.3 ms), buffer = 2 periods
ALSA: final selected sample format for capture: 32bit integer little-endian
ALSA: use 2 periods for capture
ALSA: final selected sample format for playback: 32bit integer little-endian
ALSA: use 2 periods for playback
JACK: unable to mlock() port buffers: Cannot allocate memory
Attribute Qt::AA_EnableHighDpiScaling must be set before QCoreApplication is created.
[GUI] - reading settings

<I EXITED SONIC PI HERE>

Shutting down audio thread
subgraph starting at SuperCollider timed out (subgraph_wait_fd=9, status = 0, state = Triggered, pollret = 0 revents = 0x0)

**** alsa_pcm: xrun of at least 31682.032 msecs

jack main caught signal 15
```


References:

<https://github.com/sonic-pi-net/sonic-pi/issues/849>
<https://www.miskatonic.org/2015/01/17/setting-up-sonic-pi-on-ubuntu/>
<https://github.com/sonic-pi-net/sonic-pi/issues/1908>

