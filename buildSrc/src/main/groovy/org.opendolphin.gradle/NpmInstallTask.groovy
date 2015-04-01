package org.opendolphin.gradle

import org.gradle.api.tasks.Exec

class NpmInstallTask extends Exec {

	NpmInstallTask() {
		this.setExecutable(isWindows() ? 'npm.cmd' : 'npm')
		args 'install'
		inputs.file 'package.json'
		outputs.dir 'node_modules'
	}

	static boolean isWindows() {
		System.properties['os.name'].toLowerCase().contains('windows')
	}
}