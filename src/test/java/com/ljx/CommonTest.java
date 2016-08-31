package com.ljx;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class CommonTest {
	
	@Rule
    public ExpectedException thrown = ExpectedException.none();
	
	@Test
	public void test() {
        thrown.expect(NullPointerException.class);
        throw new NullPointerException();
	}
}
