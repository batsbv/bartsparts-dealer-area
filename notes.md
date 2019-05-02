Tar vuln:

Add ...
```
"tar": {
	"version": "4.4.8",
	"resolved": "https://registry.npmjs.org/tar/-/tar-4.4.8.tgz",
	"integrity": "sha512-LzHF64s5chPQQS0IYBn9IN5h3i98c12bo4NCO7e0sGM2llXQ3p2FGC5sdENN4cTW48O915Sh+x+EXx7XW96xYQ=="
	}
```

... to `package-lock.json` as a `node-gyp` dependency, remove tar under node-gyp, this will break the tar.extract in node-gyp but as long as it is not used at least this fixes a severe vuln.
